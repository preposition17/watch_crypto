from datetime import datetime

from django.db import models


class Announcement(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(blank=False)
    create_time = models.DateTimeField(default=datetime.now())
    update_time = models.DateTimeField(auto_now=True)
    published = models.BooleanField(default=True)
    project = models.ForeignKey("projects.Project", related_name="announcements", on_delete=models.PROTECT)

    def __str__(self):
        return f"{self.project.name} - {self.title}"
