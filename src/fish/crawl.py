from __future__ import with_statement
import urllib
import re
import os
from BeautifulSoup import BeautifulSoup

class AppURLopener(urllib.FancyURLopener): 
    def __init__(self, *args): 
        self.version = "FF/3.0" 
        apply(urllib.FancyURLopener.__init__, (self,) + args)

urllib._urlopener = AppURLopener() 

def urlopen(url, pause=(0, 0)):
    s = urllib.urlopen(url)
    sleep_random(pause[0], pause[1])
    return s

# downloads all images linked from a url to the destination path
def fetch_images(url, path="/Users/Dan/Documents/Images"):
    c = urllib.urlopen(url)
    soup = BeautifulSoup(c.read())
    images = [o['src'] for o in soup.findAll('img')]    
    for image in images:
        image = urllib.basejoin(url, image)
        urllib.urlretrieve(image, filename=os.path.join(path, os.path.basename(image)))
    print "%d images found" % len(images)
    
def sleep_random(multiplier=2, base=1):
    import time, random    
    time_to_sleep = random.random() * multiplier + base
    #print 'sleeping for %f...' % (time_to_sleep)
    time.sleep(time_to_sleep)
