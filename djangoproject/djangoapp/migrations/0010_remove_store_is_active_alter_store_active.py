# Generated by Django 4.1.7 on 2023-04-29 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangoapp', '0009_alter_user_role'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='store',
            name='is_active',
        ),
        migrations.AlterField(
            model_name='store',
            name='active',
            field=models.BooleanField(default=False),
        ),
    ]
