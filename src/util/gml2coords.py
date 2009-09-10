import sys
from BeautifulSoup import BeautifulSoup


def main(argv):
#	try:
		soup = BeautifulSoup(open('%s' % argv[1]).read())
		features = soup.findAll('gml:featuremember')
		for feature in features:
			name = feature.find('ogr:name').string
			for polygon in feature.findAll('gml:polygon'):
				for coords in polygon.find('gml:coordinates'):
					print 'A %s' % name
					for line in coords.string.split(' '):
						print line
	#except:
#		print 'usage: %s <filename>' % argv[0]
		
if __name__ == "__main__":
    main(sys.argv)