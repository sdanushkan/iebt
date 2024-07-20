from django.db import models
from django.urls import reverse
from django.utils.text import slugify
from ckeditor.fields import RichTextField

# Create your models here.
class Faculty(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    slug = models.SlugField(blank=True, null=True, unique=True)
    image = models.ImageField(null=True, blank=True, default='/faculty/placeholder.png', upload_to='faculty/')
    description = RichTextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

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
    name = models.CharField(max_length=200, null=True, blank=True)
    slug = models.SlugField(blank=True, null=True, unique=True)
    order = models.IntegerField(default=1)
    offers = models.CharField(max_length=200, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
class QualificationApproval(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class OurQualification(models.Model):
    name = models.CharField(max_length=200, unique=True)
    order = models.IntegerField(default=0)
    slug = models.SlugField(blank=True, null=True)
    image = models.ImageField(null=True, blank=True, default='/OurQualification/placeholder.png', upload_to='OurQualification/')
    # description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    courses_list = RichTextField(blank=True, null=True)
    # description = models.TextField(default='null')

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class Course(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True, unique=True)
    slug = models.SlugField(max_length=200, blank=True, null=True)
    faculty = models.ForeignKey(Faculty, on_delete=models.SET_NULL, null=True)  
    image = models.ImageField(null=True, blank=True, default='/course/placeholder.png', upload_to='courses/')
    # banner = models.ImageField(null=True, blank=True, default='/course/placeholder.png', upload_to='courses/banner/')  
    course_credit = models.CharField(max_length=200, null=True, blank=True)
    qualification = models.ForeignKey(OurQualification, on_delete=models.SET_NULL, null=True)    
    class_on = models.CharField(max_length=200, null=True, blank=True)
    programe = models.ForeignKey(Level, on_delete=models.SET_NULL, null=True)
    overview = RichTextField(default='')
    requirements = RichTextField(blank=True, null=True)
    units = RichTextField(blank=True, null=True)
    visible = models.BooleanField(default=True)
    popular = models.BooleanField(default=False)
    duration = models.CharField(max_length=20, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    show_in_header = models.BooleanField(default=False)
    show_in_faculty = models.BooleanField(default=False)
    show_in_qualification = models.BooleanField(default=False)
    show_in_footer = models.BooleanField(default=False)

    ebrowcher = models.FileField(upload_to='browcher/', null=True, blank=True)

    gif_logo = models.ImageField(null=True, blank=True, upload_to='git/logo/') 

    f_title = models.CharField(max_length=20, null=True, blank=True, default='Graduate Diploma')
    f_1_name = models.CharField(max_length=20, null=True, blank=True, default='Level 6')
    f_2_name = models.CharField(max_length=20, null=True, blank=True, default='120 credits')
    f_gif_logo1 = models.ImageField(null=True, blank=True, upload_to='git/logo/')
    f_gif_logo2 = models.ImageField(null=True, blank=True, upload_to='git/logo/')

    s_top = models.CharField(max_length=20, null=True, blank=True, default='Up to')
    s_center = models.CharField(max_length=20, null=True, blank=True, default='56%')
    s_bottom = models.CharField(max_length=20, null=True, blank=True, default='Scholarship')

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class Contact(models.Model):
    name = models.CharField(max_length=2000, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    subject = models.CharField(max_length=2000, null=True, blank=True)
    phone_number = models.CharField(max_length=2000, null=True, blank=True)
    message = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name
    
class CountryCategory(models.Model):
    name = models.CharField(max_length=2000, null=True, blank=True)
    slug = models.SlugField(blank=True, null=True, unique=True)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
class Country(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    slug = models.SlugField(blank=True, null=True, unique=True)
    sort_name = models.CharField(max_length=10, null=True, blank=True)
    category = models.ForeignKey(CountryCategory, on_delete=models.SET_NULL, null=True)
    image = models.ImageField(null=True, blank=True, default='/country/image/placeholder.png', upload_to='country/image')
    flag = models.ImageField(null=True, blank=True, default='/country/flag/placeholder.png', upload_to='country/flag')
    # visa_requirement = models.TextField()
    description = models.TextField(default='null')
    details_and_scholarship = RichTextField(blank=True, null=True)
    job_and_proposal = RichTextField(blank=True, null=True)
    FAQ = RichTextField(blank=True, null=True) 
    visa_requirement = RichTextField(blank=True, null=True) 

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Country'
        verbose_name_plural = 'Countries'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
class FAQ(models.Model):
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True)
    question = RichTextField(blank=True, null=True)
    answer = RichTextField(blank=True, null=True)

    def __str__(self):
        return self.question
    
    class Meta:
        verbose_name = 'FAQ'
        verbose_name_plural = 'FAQs'
    
class About(models.Model):
    our_story = RichTextField(blank=True, null=True)
    mission = RichTextField(blank=True, null=True)
    vision = RichTextField(blank=True, null=True)
    values = RichTextField(blank=True, null=True)

    def __str__(self):
        return self.vision

class AbroadApplication(models.Model):
    first_name = models.CharField(max_length=200, null=True, blank=True)
    last_name = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    mobile_number = models.CharField(max_length=200, null=True, blank=True)
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.email

class Page(models.Model):
    name = models.CharField(max_length=2000, null=True, blank=True)
    
    def __str__(self):
        return self.name
    
class University(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    slug = models.SlugField(unique=True,  null=True, blank=True)
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True, blank=True)
    
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
    description = RichTextField(blank=True, null=True) 
    
    def __str__(self):
        return self.name

class PageCoverImage(models.Model):
    image = models.ImageField(null=True, blank=True, default='/page/image/placeholder.png', upload_to='page/')
    page = models.ForeignKey(Page, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.page.name
    

class DualQualification(models.Model):
    image = models.ImageField(null=True, blank=True, default='/page/image/placeholder.png', upload_to='dualQualification/')
    title = models.CharField(max_length=200, null=True, blank=True)
    slug = models.SlugField(max_length=200, blank=True, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    description = RichTextField(blank=True, null=True)
    
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    

class DualQualificationCourse(models.Model):
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True)
    dual_qualification = models.ForeignKey(DualQualification, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    slug = models.SlugField(max_length=200, blank=True, null=True)
    faculty = models.ForeignKey(Faculty, on_delete=models.SET_NULL, null=True)  
    image = models.ImageField(null=True, blank=True, default='/course/placeholder.png', upload_to='courses/')  
    course_credit = models.CharField(max_length=200, null=True, blank=True)
    qualification = models.ForeignKey(OurQualification, on_delete=models.SET_NULL, null=True)    
    class_on = models.CharField(max_length=200, null=True, blank=True)
    programe = models.ForeignKey(Level, on_delete=models.SET_NULL, null=True)
    overview = RichTextField(default='')
    requirements = RichTextField(blank=True, null=True)
    units = RichTextField(blank=True, null=True)
    visible = models.BooleanField(default=True)
    popular = models.BooleanField(default=False)
    duration = models.CharField(max_length=20, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    def get_url(self):
        return reverse('product_detail', args=[self.course.slug, self.id])
    
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
    event = models.CharField(max_length=200, null=True, blank=True)
    date = models.DateField(unique=True)

    def __str__(self):
        return self.event
