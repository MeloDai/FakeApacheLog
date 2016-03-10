# coding:utf-8
from django.db import models
 
 
class namepw(models.Model):
	username = models.CharField(max_length=50)
	pw = models.CharField(max_length=50)
	email = models.CharField(max_length=50)

	def __str__(self):
		return "{0} {1} {2}".format(self.username, self.pw, self.email)

class filelist(models.Model):
	username = models.CharField(max_length=50)
	filename = models.CharField(max_length=100)
	desc = models.CharField(max_length=100)
	time = models.CharField(max_length=20)
		
	def __str__(self):
		return "{0} {1} {2} {3}".format(self.username, self.filename, self.desc, self.time)