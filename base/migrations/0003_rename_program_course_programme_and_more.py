# Generated by Django 5.0.7 on 2024-07-22 20:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_alter_course_slug_alter_faculty_name_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='course',
            old_name='program',
            new_name='programme',
        ),
        migrations.RenameField(
            model_name='dualqualificationcourse',
            old_name='program',
            new_name='programme',
        ),
    ]
