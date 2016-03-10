# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-02-16 18:25
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('login', '0003_auto_20160216_1825'),
    ]

    operations = [
        migrations.CreateModel(
            name='filelist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('filename', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='namepw',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50)),
                ('pw', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='filelist',
            name='username',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login.namepw'),
        ),
    ]