# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-02-19 21:41
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0011_auto_20160217_2239'),
    ]

    operations = [
        migrations.AlterField(
            model_name='filelist',
            name='username',
            field=models.CharField(max_length=50),
        ),
    ]
