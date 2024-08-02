from django.db import models
from django.urls import reverse
from django.utils.text import slugify
from ckeditor.fields import RichTextField

class Faculty(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True, unique=True)
    slug = models.SlugField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True, default='/faculty/placeholder.png', upload_to='faculty/')
    description = RichTextField(null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Faculty'
        verbose_name_plural = 'Faculties'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class Level(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True, unique=True)
    slug = models.SlugField(null=True, blank=True)
    offers = models.CharField(max_length=200, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class OurQualification(models.Model):
    name = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True, default='/OurQualification/placeholder.png', upload_to='OurQualification/')
    courses_list = RichTextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class Card(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    slug = models.SlugField(null=True, blank=True)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class Course(models.Model):
    name = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, null=True, blank=True)
    faculty = models.ForeignKey(Faculty, on_delete=models.SET_NULL, null=True, blank=True )
    card = models.ForeignKey(Card, on_delete=models.SET_NULL, null=True, blank=True )
    image = models.ImageField(null=True, blank=True, default='/course/placeholder.png', upload_to='courses/')
    course_credit = models.CharField(max_length=200, null=True, blank=True)
    qualification = models.ForeignKey(OurQualification, on_delete=models.SET_NULL, null=True, blank=True)
    class_on = models.CharField(max_length=200, null=True, blank=True)
    programme = models.ForeignKey(Level, on_delete=models.SET_NULL, null=True, blank=True)
    overview = RichTextField(default='')
    requirements = RichTextField(null=True, blank=True)
    units = RichTextField(null=True, blank=True)
    visible = models.BooleanField(default=True)
    popular = models.BooleanField(default=False)
    duration = models.CharField(max_length=20, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    show_in_header = models.BooleanField(default=False)
    show_in_faculty = models.BooleanField(default=False)
    show_in_qualification = models.BooleanField(default=False)
    show_in_footer = models.BooleanField(default=False)
    brochure = models.FileField(upload_to='brochure/', null=True, blank=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


class CountryCategory(models.Model):
    name = models.CharField(max_length=2000, null=True, blank=True)
    slug = models.SlugField(null=True, blank=True, unique=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class Country(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    slug = models.SlugField(null=True, blank=True, unique=True)
    sort_name = models.CharField(max_length=10, null=True, blank=True)
    category = models.ForeignKey(CountryCategory, on_delete=models.SET_NULL, null=True, blank=True)
    image = models.ImageField(null=True, blank=True, default='/country/image/placeholder.png', upload_to='country/image')
    flag = models.ImageField(null=True, blank=True, default='/country/flag/placeholder.png', upload_to='country/flag')
    description = RichTextField(null=True, blank=True)
    visa_requirement = RichTextField(null=True, blank=True)
    details_and_scholarship = RichTextField(null=True, blank=True)
    job_and_proposal = RichTextField(null=True, blank=True)
    FAQ = RichTextField(null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Country'
        verbose_name_plural = 'Countries'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class FAQType(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    slug = models.SlugField(null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'FAQ Type'
        verbose_name_plural = 'FAQ Types'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class FAQ(models.Model):
    type = models.ForeignKey(FAQType, on_delete=models.SET_NULL, null=True, blank=True )
    question = models.CharField(max_length=200, null=True, blank=True)
    answer = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.question

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class Page(models.Model):
    name = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(null=True, blank=True)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


class University(models.Model):
    name = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(null=True, blank=True)
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True, blank=True, related_name='universities')

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class Testimonial(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True, blank=True)
    university = models.ForeignKey(University, on_delete=models.SET_NULL, null=True, blank=True)
    page = models.ForeignKey(Page, on_delete=models.SET_NULL, null=True, blank=True)
    description = RichTextField(null=True, blank=True)

    def __str__(self):
        return self.name

class DualQualification(models.Model):
    image = models.ImageField(null=True, blank=True, default='/page/image/placeholder.png', upload_to='dualQualification/')
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, null=True, blank=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    description = RichTextField(null=True, blank=True)
    brochure = models.FileField(upload_to='brochure/', null=True, blank=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class DualQualificationCourse(models.Model):
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True)
    dual_qualification = models.ForeignKey(DualQualification, on_delete=models.SET_NULL, null=True, related_name='courses')
    name = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, null=True, blank=True)
    faculty = models.ForeignKey(Faculty, on_delete=models.SET_NULL, null=True, blank=True )
    image = models.ImageField(null=True, blank=True, default='/course/placeholder.png', upload_to='courses/')
    course_credit = models.CharField(max_length=200, null=True, blank=True)
    qualification = models.ForeignKey(OurQualification, on_delete=models.SET_NULL, null=True, blank=True)
    class_on = models.CharField(max_length=200, null=True, blank=True)
    programme = models.ForeignKey(Level, on_delete=models.SET_NULL, null=True, blank=True)
    overview = RichTextField(default='')
    requirements = RichTextField(null=True, blank=True)
    units = RichTextField(null=True, blank=True)
    visible = models.BooleanField(default=True)
    popular = models.BooleanField(default=False)
    duration = models.CharField(max_length=20, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    show_in_header = models.BooleanField(default=False)
    show_in_faculty = models.BooleanField(default=False)
    show_in_qualification = models.BooleanField(default=False)
    show_in_footer = models.BooleanField(default=False)
    brochure = models.FileField(upload_to='brochure/', null=True, blank=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class StudentVerification(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    nic = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.name

class Event(models.Model):
    page = models.ForeignKey(Page, on_delete=models.SET_NULL, null=True, blank=True)
    event = models.CharField(max_length=200, null=True, blank=True)
    date = models.DateField(unique=True)
    description = RichTextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True, default='/course/placeholder.png', upload_to='events/')

    def __str__(self):
        return self.event
