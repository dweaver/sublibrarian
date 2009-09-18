
sw = (43.499355999999999, -97.239209000000002)
ne = (49.384357999999999, -89.489226000000002)
steps = 50.0
latstep = (ne[0] - sw[0]) / steps
lonstep = (ne[1] - sw[1]) / steps

for i in range(steps):
    for j in range(steps):
        lat = sw[0] + i * latstep
        lon = sw[1] + j * lonstep
        print "A %d_%d" % (i, j)
        print "%f, %f" % (lon, lat)
        print "%f, %f" % (lon + lonstep, lat)
        print "%f, %f" % (lon + lonstep, lat + latstep)
        print "%f, %f" % (lon, lat + latstep)
        print "%f, %f" % (lon, lat)
        print ""