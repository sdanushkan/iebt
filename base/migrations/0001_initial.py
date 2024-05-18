# Generated by Django 5.0.6 on 2024-05-18 02:05

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('our_story', models.CharField(blank=True, max_length=2000, null=True)),
                ('mission', models.CharField(blank=True, max_length=2000, null=True)),
                ('vision', models.CharField(blank=True, max_length=2000, null=True)),
                ('values', models.CharField(blank=True, max_length=2000, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='ClassOn',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=2000, null=True)),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('subject', models.CharField(blank=True, max_length=2000, null=True)),
                ('phone_number', models.CharField(blank=True, max_length=2000, null=True)),
                ('message', models.CharField(blank=True, max_length=2000, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=2000, null=True)),
                ('image', models.ImageField(blank=True, default='/country/image/placeholder.png', null=True, upload_to='')),
                ('flag', models.ImageField(blank=True, default='/country/flag/placeholder.png', null=True, upload_to='')),
                ('visa_reqrequirementi', models.CharField(blank=True, max_length=2000, null=True)),
                ('discription', models.CharField(blank=True, max_length=2000, null=True)),
                ('details_and_scholarship', models.CharField(blank=True, max_length=2000, null=True)),
                ('job_and_proposal', models.CharField(blank=True, max_length=2000, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('image', models.ImageField(blank=True, default='/faculty/placeholder.png', null=True, upload_to='')),
                ('description', models.CharField(blank=True, max_length=2000, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Level',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('offers', models.CharField(blank=True, max_length=200, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='OurQualification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('image', models.ImageField(blank=True, default='/OurQualification/placeholder.png', null=True, upload_to='')),
                ('discription', models.CharField(blank=True, max_length=2000, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='QualificationApproval',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='AbroadApplication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=2000, null=True)),
                ('last_name', models.CharField(blank=True, max_length=2000, null=True)),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('mobile_number', models.CharField(blank=True, max_length=2000, null=True)),
                ('country', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.country')),
            ],
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('course_credit', models.CharField(blank=True, max_length=200, null=True)),
                ('overview', models.CharField(blank=True, max_length=2000, null=True)),
                ('duration', models.CharField(blank=True, max_length=20, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('class_on', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.classon')),
                ('faculty', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.faculty')),
                ('qualification_approval', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.level')),
            ],
        ),
        migrations.CreateModel(
            name='CourseQualification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('requirement', models.CharField(blank=True, max_length=2000, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('course', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.course')),
            ],
        ),
        migrations.CreateModel(
            name='FAQ',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quation', models.ImageField(blank=True, default='/country/flag/placeholder.png', null=True, upload_to='')),
                ('answer', models.CharField(blank=True, max_length=2000, null=True)),
                ('country', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.country')),
            ],
        ),
        migrations.CreateModel(
            name='Unit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('course', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.course')),
                ('level', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.level')),
            ],
        ),
    ]
