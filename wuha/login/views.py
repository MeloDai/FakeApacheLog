from django.shortcuts import render
from collections import OrderedDict
from login.models import namepw, filelist
from django.http import HttpResponse
import re
import random
import socket
import struct
import time
import datetime
import csv

countrycity = {}
city = {}
cityread = csv.reader(open('/Users/Melo/Desktop/Work/GeoLite2-City-CSV_20160105/GeoLite2-City-Locations-en.csv', newline=''), delimiter=',', quotechar='|')
for row in cityread:
	matchObj = re.match(r'\"(.*)\"', row[10], re.M|re.I)
	matchcountry = re.match(r'\"(.*)\"', row[5], re.M|re.I)
	if matchObj:
		if matchcountry:
			txtxtx=matchObj.group(1)+'\t'+matchcountry.group(1)
		else:
			txtxtx=matchObj.group(1)+'\t'+row[5]
	else:
		if matchcountry:
			txtxtx=row[10]+'\t'+matchcountry.group(1)
		else:
			txtxtx=row[10]+'\t'+row[5]
	# tem = txtxtx.split("\t")
	# if tem[0] != "":
	# 	if tem[1] != 'country_name':
	# 		if tem[1] not in countrycity:
	# 			temtem = []
	# 			temtem.append(tem[0]);
	# 			countrycity.update({tem[1]: temtem})
	# 		else:
	# 			countrycity[tem[1]].append(tem[0])
	if txtxtx not in city:
		txtxtxtx=[]
		txtxtxtx.append(row[0])
		city.update({txtxtx: txtxtxtx})
		
	else:
		txtxtxtx=city[txtxtx]
		txtxtxtx.append(row[0])
		city.update({txtxtx: txtxtxtx})
# sortcountrycity = OrderedDict(sorted(countrycity.items()))


ipread = csv.reader(open('/Users/Melo/Desktop/Work/GeoLite2-City-CSV_20160105/GeoLite2-City-Blocks-IPv4.csv', newline=''), delimiter=',', quotechar='|')
ipcity={}
for row in ipread:
	matchObj = re.match(r'(.*)\.\d+/.*', row[0], re.M|re.I)
	if matchObj:
		if row[1] in ipcity:
			ipcity[row[1]].append(matchObj.group(1))
		else:
			txtxtx = []
			txtxtx.append(matchObj.group(1))
			ipcity.update({row[1]:txtxtx})




# Create your views here.
def login(request):
	return render(request, 'registration/login.html')

def register(request):
	return render(request, 'registration/register.html')

def ceshi(request):
	username1 = request.GET.get('username', False)
	matchObj = re.match(r'\"(.*)\"', username1, re.M|re.I)
	if matchObj:
		username1=matchObj.group(1)
	else:
		matchObj1 = re.match(r'\'(.*)\'', username1, re.M|re.I)
		if matchObj1:
			username1=matchObj1.group(1)
	des = request.GET.get('des', False)
	rr = request.GET.get('rr', False)
	hr = request.GET.get('hr', False)
	pagename = request.GET.get('pn', False)
	pagesize = request.GET.get('ps', False)
	rp = request.GET.get('rp', False)
	hp = request.GET.get('hp', False)
	rps = request.GET.get('rps', False)
	rpe = request.GET.get('rpe', False)
	rpp = request.GET.get('rpp', False)
	hps = request.GET.get('hps', False)
	hpe = request.GET.get('hpe', False)
	hpp = request.GET.get('hpp', False)
	mn = request.GET.get('mn', False)
	mp = request.GET.get('mp', False)
	rsn = request.GET.get('rsn', False)
	rsp = request.GET.get('rsp', False)
	fu = request.GET.get('fu', False)
	up = request.GET.get('up', False)
	hfu = request.GET.get('hfu', False)
	hup = request.GET.get('hup', False)
	sn = request.GET.get('sn', False)
	syp = request.GET.get('syp', False)
	rcn = request.GET.get('rcn', False)
	rccn = request.GET.get('rccn', False)
	rcp = request.GET.get('rcp', False)
	hcn = request.GET.get('hcn', False)
	hccn = request.GET.get('hccn', False)
	hcp = request.GET.get('hcp', False)
	timestr = time.strftime("%Y%m%d-%H%M%S")
	
	system = {"iPhone": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13D11 Safari/601.1",
	"iPod": "Mozilla/5.0 (iPod; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/11.1.66360 Mobile/13C75 Safari/600.1.4",
	"iPod touch": "Mozilla/5.0 (iPod touch; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13C75 Safari/601.1",
	"iPad": "Mozilla/5.0 (iPad; CPU OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13C75 Version/9.2 Safari/8536.25 Mobicip/351206448",
	"Windows": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2593.0 Safari/537.36",
	"Windows Phone": "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 925) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537",
	"Linux": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36",
	"Ubuntu": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:43.0) Gecko/20100101 Firefox/43.0",
	"Android": "Mozilla/5.0 (Linux; Android 5.1.1; LG-H631 Build/LMY47V) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36",
	"Mac": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36",
	"BlackBerry": "Mozilla/5.0 (BlackBerry; U; BlackBerry 9720; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.1121 Mobile Safari/534.11+",
	"PS4":" Mozilla/5.0 (PlayStation 4 3.11) AppleWebKit/537.73 (KHTML, like Gecko)",
	"WiiU": "Mozilla/5.0 (Nintendo WiiU) AppleWebKit/536.30 (KHTML, like Gecko) NX/3.0.4.2.11 NintendoBrowser/4.3.0.11224.US",
	"3DS": "Mozilla/5.0 (Nintendo 3DS; U; ; en) Version/1.7616.US"}
	w = []
	rr = int(rr)
	hr = int(hr)
	pn1 = pagename.split("\t")
	ps1 = pagesize.split("\t")
	rp1 = rp.split("\t")
	
	hp1 = hp.split("\t")
	
	rps1 = rps.split("\t")
	rpe1 = rpe.split("\t")
	rpp1 = rpp.split("\t")
	hps1 = hps.split("\t")
	hpe1 = hpe.split("\t")
	hpp1 = hpp.split("\t")
	mn1 = mn.split("\t")
	mp1 = mp.split("\t")
	rsn1 = rsn.split("\t")
	rsp1 = rsp.split("\t")
	fu1 = fu.split("\t")
	up1 = up.split("\t")
	hfu1 = hfu.split("\t")
	hup1 = hup.split("\t")
	sn1 = sn.split("\t")
	syp1 = syp.split("\t")
	rcn1 = rcn.split("\t")
	rccn1 = rccn.split("\t")
	rcp1 = rcp.split("\t")
	hcn1 = hcn.split("\t")
	hccn1 = hccn.split("\t")
	hcp1 = hcp.split("\t")

	psn = {}
	for i in range(0, len(pn1) - 1):
		psn.update({pn1[i]: int(ps1[i])})




	ru = 0
	for i in range(0, len(rp1) - 1):
		ru = len(rp1[i].split("|")) + ru
	ru = int(ru / (len(rp1) - 1))
	hu = 0
	for i in range(0, len(hp1) - 1):
		hu = len(hp1[i].split("|")) + hu
	hu = int(hu / (len(hp1) - 1))

	temip = []
	for k in range(0, len(rcn1) - 1):
		temc = []
		temc.append(rcn1[k]+'\t'+rccn1[k])
		temc.append(int(round(float(rcp1[k])) + 1))
		temc = tuple(temc)
		temip.append(temc)

	htemip = []
	for k in range(0, len(hcn1)-1):
		temc = []
		temc.append(hcn1[k]+'\t'+hccn1[k])
		temc.append(int(round(float(hcp1[k])) + 1))
		temc = tuple(temc)
		htemip.append(temc)


	temme = []
	for k in range(0, len(mn1)-1):
		temm = []
		temm.append(mn1[k])
		temm.append(int(round(float(mp1[k])) + 1))
		temm = tuple(temm)
		temme.append(temm)

	temrs = []
	for k in range(0, len(rsn1)-1):
		temr = []
		temr.append(rsn1[k])
		temr.append(int(round(float(rsp1[k])) + 1))
		temr = tuple(temr)
		temrs.append(temr)

	temfr = []
	for k in range(0, len(fu1)-1):
		temf = []
		temf.append(fu1[k])
		temf.append(int(round(float(up1[k])) + 1))
		temf = tuple(temf)
		temfr.append(temf)

	temhfr = []
	for k in range(0, len(hfu1)-1):
		temf = []
		temf.append(hfu1[k])
		temf.append(int(round(float(hup1[k])) + 1))
		temf = tuple(temf)
		temhfr.append(temf)

	temsy = []
	for k in range(0, len(sn1)-1):
		tems = []
		tems.append(sn1[k])
		tems.append(int(round(float(syp1[k])) + 1))
		tems = tuple(tems)
		temsy.append(tems)


	count=0

	for i in range(0, len(rps1)-1):
		starttime = datetime.datetime(2016,2,8)
		first = rps1[i].split(":")
		second = rpe1[i].split(":")
		starttime = starttime + datetime.timedelta(seconds = int(first[0]) * 3600 + int(first[1]) * 60 + int(first[2]))
		diff = (int(second[0]) - int(first[0])) * 3600 + (int(second[1]) - int(first[1])) * 60 + int(second[2]) - int(first[2])
		l = rr * int(round(float(rpp1[i])) + 1) / 100
		ipnum = int(l/ru)
		if ipnum != 0:
			diffip = int(diff/ipnum)
			for j in range(0, ipnum):
				dtem = starttime + datetime.timedelta(seconds = diffip * j)
				temcity = [val for val, cnt in temip for i in range(cnt)]
				x = random.choice(temcity)
				xx = city[x]
				temgeoid = random.randint(0, len(xx)-1)
				temgeoidnum = xx[temgeoid]
				temips = ipcity[temgeoidnum]
				ipnumnum = random.randint(0,len(temips)-1)
				ip1 = temips[ipnumnum] + "." + str(random.randint(0, 255))
				pn = random.randint(0, len(rp1)-2)
				pp = rp1[pn].split("|")
				for shankong in range(0, len(pp)):
					if len(pp[shankong].split(" ")) > 1:
						pp[shankong] = pp[shankong].split(" ")[1]
				dtemtem = dtem
				for k in range(0, len(pp)):
					temmethod = [val for val, cnt in temme for i in range(cnt)]
					temresource = [val for val, cnt in temrs for i in range(cnt)]
					ppp = pp[k].split(",")
					temdatesize = 0
					for yoxi in range(0,len(ppp)):
						temdatesize = temdatesize + psn[ppp[yoxi]]

					temfromurl = [val for val, cnt in temfr for i in range(cnt)]
					temsystem = [val for val, cnt in temsy for i in range(cnt)]
					temtimediff = random.randint(5, 10)
					temw=[dtemtem.strftime('%d/%b/%Y:%H:%M:%S %z'),'%s - - [%s-0500] "%s /%s HTTP/1.0" %s %s "%s" "%s"' % (ip1, dtemtem.strftime('%d/%b/%Y:%H:%M:%S %z'), random.choice(temmethod), pp[k], random.choice(temresource), temdatesize, random.choice(temfromurl), system[random.choice(temsystem)])]
					w.append(temw)
					count=count+1
					print(count)
					dtemtem = dtemtem + datetime.timedelta(seconds = temtimediff)
			starttime = starttime + datetime.timedelta(seconds = diff)

	

	for i in range(0, len(hps1)-1):
		starttime = datetime.datetime(2016,2,8)
		first = hps1[i].split(":")
		second = hpe1[i].split(":")
		starttime = starttime + datetime.timedelta(seconds = int(first[0]) * 3600 + int(first[1]) * 60 + int(first[2]))
		diff = (int(second[0]) - int(first[0])) * 3600 + (int(second[1]) - int(first[1])) * 60 + int(second[2]) - int(first[2])
		l = hr * int(round(float(hpp1[i])) + 1) / 100
		ipnum = int(l/hu)
		if ipnum != 0:
			diffip = int(diff/ipnum)
			for j in range(0, ipnum):
				dtem = starttime + datetime.timedelta(seconds = diffip * j)
				temcity = [val for val, cnt in htemip for i in range(cnt)]
				x = random.choice(temcity)
				xx = city[x]
				temgeoid = random.randint(0, len(xx)-1)
				temgeoidnum = xx[temgeoid]
				temips = ipcity[temgeoidnum]
				ipnumnum = random.randint(0,len(temips)-1)
				ip1 = temips[ipnumnum] + "." + str(random.randint(0, 255))
				pn = random.randint(0, len(hp1)-2)
				pp = hp1[pn].split("|")
				for shankong in range(0, len(pp)):
					if len(pp[shankong].split(" ")) > 1:
						pp[shankong] = pp[shankong].split(" ")[1]
				dtemtem = dtem
				for k in range(0, len(pp)):
					temmethod = [val for val, cnt in temme for i in range(cnt)]
					temresource = [val for val, cnt in temrs for i in range(cnt)]
					ppp = pp[k].split(",")
					temdatesize = 0
					for yoxi in range(0,len(ppp)):
						temdatesize = temdatesize + psn[ppp[yoxi]]

					temfromurl = [val for val, cnt in temhfr for i in range(cnt)]
					temsystem = [val for val, cnt in temsy for i in range(cnt)]
					temtimediff = random.randint(5, 10)
					temw=[dtemtem.strftime('%d/%b/%Y:%H:%M:%S %z'),'%s - - [%s-0500] "%s /%s HTTP/1.0" %s %s "%s" "%s"' % (ip1, dtemtem.strftime('%d/%b/%Y:%H:%M:%S %z'), random.choice(temmethod), pp[k], random.choice(temresource), temdatesize, random.choice(temfromurl), system[random.choice(temsystem)])]
					w.append(temw)
					count=count+1
					print(count)
					dtemtem = dtemtem + datetime.timedelta(seconds = temtimediff)
			starttime = starttime + datetime.timedelta(seconds = diff)


	w = sorted(w)
	f = open('/Users/Melo/wuha/login/templates/log/access_log_'+timestr+'.log', 'w')
	for i in range(0,len(w)):
		f.write(w[i][1])
		f.write('\n')
	url='file:///Users/Melo/Desktop/log/access_log_'+timestr+'.log'
	urll='access_log_'+timestr+'.log'

	userfile=filelist(username=username1, filename=urll,desc=des, time=timestr)
	userfile.save()

	return render(request, 'registration/finish.html')

def registerstatus(request):
	name = request.POST.get('username',0)
	password = request.POST.get('password',0)
	check = request.POST.get('email', 0)
	if check != 0:
		emailadd = request.POST['email']
		name = str(name)
		emailadd = str(emailadd)
		password = str(password)
		if namepw.objects.filter(username = name):
			return render(request, 'registration/registerstatusexit.html', {'username': name})
		elif namepw.objects.filter(email = emailadd):
			return render(request, 'registration/registerstatusemailexit.html', {'email': emailadd})
		else:
			userinfo = namepw(username = name, pw = password, email = emailadd) 
			userinfo.save()
			return render(request, 'registration/registerstatus.html', {'username': name})
	else:
		if namepw.objects.filter(username = name, pw = password):
			filename1 = {}
			tem = filelist.objects.filter(username = name)

			for i in range(0, len(tem)):
				n = tem[i].filename
				t = tem[i].time
				des = tem[i].desc
				ttt = {des: n+'\t'+t}
				filename1.update(ttt)
			
			return render(request, 'registration/registerstatus.html', {'username': name, 'filename': filename1,})
		else:
			return render(request, 'registration/wronglogin.html')

def forgotpw(request):
	return	render(request, 'registration/forgotpw.html')

def resetpw(request):
	name = request.POST.get('username',0)
	password = request.POST.get('password',0)
	emailadd = request.POST.get('email', 0)
	name = str(name)
	emailadd = str(emailadd)
	password = str(password)
	if namepw.objects.filter(username = name, email = emailadd):
		namepw.objects.filter(username = name).update(pw = password)
		return render(request, 'registration/registerstatus.html', {'username': name})
	else:
		return render(request, 'registration/wronginfo.html', {'username': name, 'email': emailadd})
