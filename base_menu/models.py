from django.db import models

class Burgers(models.Model):
    name = models.CharField('Название продукта', max_length=60)
    structure = models.TextField('Ингредиенты продукта', max_length=400)
    img = models.ImageField(upload_to='base_menu/static/base_menu/img')
    price = models.DecimalField(max_digits=10, decimal_places=0, verbose_name='Цена продукта', default=0)

    def __str__(self):
        return self.name

class Breakfasts(models.Model):
    name = models.CharField('Название продукта', max_length=60)
    structure = models.TextField('Ингредиенты продукта', max_length=400)
    img = models.ImageField(upload_to='base_menu/static/base_menu/img')
    price = models.DecimalField(max_digits=10, decimal_places=0, verbose_name='Цена продукта', default=0)

    def __str__(self):
        return self.name

class Hotdogs(models.Model):
    name = models.CharField('Название продукта', max_length=60)
    structure = models.TextField('Ингредиенты продукта', max_length=400)
    img = models.ImageField(upload_to='base_menu/static/base_menu/img')
    price = models.DecimalField(max_digits=10, decimal_places=0, verbose_name='Цена продукта', default=0)

    def __str__(self):
        return self.name

class Snacks(models.Model):
    name = models.CharField('Название продукта', max_length=60)
    structure = models.TextField('Ингредиенты продукта', max_length=400)
    img = models.ImageField(upload_to='base_menu/static/base_menu/img')
    price = models.DecimalField(max_digits=10, decimal_places=0, verbose_name='Цена продукта', default=0)

    def __str__(self):
        return self.name

class Sauces(models.Model):
    name = models.CharField('Название продукта', max_length=60)
    structure = models.TextField('Ингредиенты продукта', max_length=400)
    img = models.ImageField(upload_to='base_menu/static/base_menu/img')
    price = models.DecimalField(max_digits=10, decimal_places=0, verbose_name='Цена продукта', default=0)

    def __str__(self):
        return self.name

class Drinks(models.Model):
    name = models.CharField('Название продукта', max_length=60)
    structure = models.TextField('Ингредиенты продукта', max_length=400)
    img = models.ImageField(upload_to='base_menu/static/base_menu/img')
    price = models.DecimalField(max_digits=10, decimal_places=0, verbose_name='Цена продукта', default=0)

    def __str__(self):
        return self.name