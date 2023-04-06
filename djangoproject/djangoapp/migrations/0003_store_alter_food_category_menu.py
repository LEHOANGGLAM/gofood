# Generated by Django 4.1.7 on 2023-04-05 15:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('djangoapp', '0002_alter_food_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('updated_date', models.DateTimeField(auto_now=True)),
                ('active', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=200)),
                ('address', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('phone', models.CharField(max_length=11)),
                ('open_time', models.TimeField()),
                ('close_time', models.TimeField()),
                ('image', models.ImageField(null=True, upload_to='stores/%Y/%m')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AlterField(
            model_name='food',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='djangoapp.category'),
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('updated_date', models.DateTimeField(auto_now=True)),
                ('active', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('store', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='djangoapp.store')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
