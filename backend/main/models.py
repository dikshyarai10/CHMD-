from django.db import models

# Create your models here.
from django.db import models

# Admin Model
class Admin(models.Model):
    admin_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    contact_number = models.CharField(max_length=15)

# Teacher Model
class Teacher(models.Model):
    teacher_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    contact_number = models.CharField(max_length=15)

# Parent Model
class Parent(models.Model):
    parent_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    contact_number = models.CharField(max_length=15)

# Student Model
class Student(models.Model):
    student_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    student_class = models.CharField(max_length=50)
    section = models.CharField(max_length=10)
    date_of_birth = models.DateField()
    identity_card = models.FileField(upload_to='identity_cards/', blank=True)
    parent = models.ForeignKey(Parent, on_delete=models.CASCADE, related_name='children')

# ReportCard Model
class ReportCard(models.Model):
    report_card_id = models.AutoField(primary_key=True)
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='report_cards')
    term = models.CharField(max_length=50)
    subject = models.CharField(max_length=100)
    marks = models.IntegerField()
    grade = models.CharField(max_length=5)
    uploaded_by = models.ForeignKey(Teacher, on_delete=models.CASCADE)

# DiaryNote Model
class DiaryNote(models.Model):
    note_id = models.AutoField(primary_key=True)
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='diary_notes')
    date = models.DateField()
    content = models.TextField()
    uploaded_by = models.ForeignKey(Teacher, on_delete=models.CASCADE)

# ClassRoutine Model
class ClassRoutine(models.Model):
    routine_id = models.AutoField(primary_key=True)
    student_class = models.CharField(max_length=50)
    section = models.CharField(max_length=10)
    routine_file = models.FileField(upload_to='routines/')
    uploaded_by = models.ForeignKey(Teacher, on_delete=models.CASCADE)

# Discussion Model
class Discussion(models.Model):
    discussion_id = models.AutoField(primary_key=True)
    author_id = models.IntegerField()  # Can reference Parent or Teacher
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

# Viewer Model
class Viewer(models.Model):
    viewer_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(blank=True, null=True)
    inquiry = models.TextField(blank=True, null=True)

# Gallery Model
class Gallery(models.Model):
    gallery_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    image_file = models.ImageField(upload_to='gallery/')
    uploaded_by = models.ForeignKey(Admin, on_delete=models.CASCADE)

# Billing Model
class Billing(models.Model):
    billing_id = models.AutoField(primary_key=True)
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='billings')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    due_date = models.DateField()
    status = models.CharField(max_length=50)
    uploaded_by = models.ForeignKey(Admin, on_delete=models.CASCADE)

# Inquiry Model
class Inquiry(models.Model):
    inquiry_id = models.AutoField(primary_key=True)
    viewer = models.ForeignKey(Viewer, on_delete=models.CASCADE, related_name='inquiries')
    message = models.TextField()
    date = models.DateField(auto_now_add=True)

# Registration Model
class Registration(models.Model):
    registration_id = models.AutoField(primary_key=True)
    viewer = models.ForeignKey(Viewer, on_delete=models.CASCADE, related_name='registrations')
    child_name = models.CharField(max_length=100)
    student_class = models.CharField(max_length=50)
    date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=50)
