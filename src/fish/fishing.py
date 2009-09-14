from __future__ import with_statement
from BeautifulSoup import BeautifulSoup
import crawl
import urllib
import os, re

def CrawlAllLakes():
    r = re.compile('lakes (.*).html')
    for filename in os.listdir(os.curdir):
        match = r.match(filename)
        if match:
            county = match.groups()[0]
            print county
            CrawlLakes(filename, county)

def CrawlLakes(filename='www.dnr.state.mn.us otter tail lakes.html', prefix='ottertail'):
    # need to first save http://www.dnr.state.mn.us/lakefind/results.html?start=0&n=353
    # for county in question (get+post, unfortunately)
    s = open(filename, 'r').read()

    soup = BeautifulSoup(s)
    links = soup.findAll('a', href=re.compile('.*/lakefind/showreport.html.*'))
    urls = [link['href'] for link in links]

    lakenum = re.compile('.*\?downum\=(\d+)')
    
    print urls
    
    for i in range(len(urls)):
        match = lakenum.match(urls[i])
        if match:
            num = match.groups()[0]
            outputfilename = 'lake%s%s.html' % (prefix, num)
            if os.path.exists(outputfilename):
                print '%s already saved.' % outputfilename
            else:
                fullurl = urllib.basejoin('http://www.dnr.state.mn.us/', urls[i])
                print fullurl
                text = crawl.urlopen(fullurl, pause=(0.5, 0)).read()
                f = open(outputfilename, 'w')
                f.write(text)
                f.close()
            
containsAlpha = re.compile('[a-z|A-Z]')
def safeFloat(s):
    if containsAlpha.search(s):
        return 0
    else:
        return float(s)

def csvString(s):
    return '"' + s.strip().replace('"', '""') + '"'

def GetFish(outputfilename='fishing all mn.csv'):
    filere = re.compile('lake(\w+?)(\d+)\.html')
    with open(outputfilename, 'w') as outputFile:
        for filename in os.listdir(os.curdir):
            match = filere.match(filename)
            if match:
                with open(filename) as inputFile:
                    soup = BeautifulSoup(inputFile.read())
                    county = csvString(match.groups()[0])
                    lakeid = match.groups()[1]
                    lakename = csvString(soup.findAll('h3')[0].string[6:].lower())
            
                    tableHeading = soup.find(lambda tag: tag.name == 'h3' and re.compile('Fish Sampled').match(tag.string))
                    if tableHeading:
                        year = int(re.compile('(\d{4})').search(tableHeading.string).groups()[0])
                        print lakename, year, filename
                        tableSoup = tableHeading.findNext('table')
                        trs = tableSoup.findAll('tr', attrs={'class': re.compile('smalltext')})
                        for tr in trs:
                            tds = tr.findAll('td')
                            if len(tds) > 5:
                                if tds[0].i and tds[0].i.string:
                                    fishname = csvString(tds[0].i.string)
                                gearUsed = csvString(tds[1].string)
                                fishPerNet = safeFloat(tds[2].string)
                                fishPerNetRange = [safeFloat(n) for n in tds[3].string.split('-')]
                                avgFishWeight = safeFloat(tds[4].string)
                                avgFishWeightRange = [safeFloat(n) for n in tds[5].string.split('-')]
                                try:
                                    row = [county, lakeid, lakename, year, fishname, gearUsed, fishPerNet, fishPerNetRange[0], fishPerNetRange[1], avgFishWeight, avgFishWeightRange[0], avgFishWeightRange[1]]
                                    
                                    line = u','.join([str(item) for item in row]) 
                                    print(line)
                                    outputFile.write(line + '\n')
                                except:
                                    pass
                            else:
                                print 'no fish'
      
    