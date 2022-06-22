from rest_framework import serializers

from custom_serializers import RelatedFieldAlternative
from .models import Announcement
from projects.models import Project
from projects.serializers import ProjectSerializer


class AnnouncementSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(source="pk", read_only=True)
    create_time = serializers.DateTimeField(required=False)
    project = RelatedFieldAlternative(queryset=Project.objects.all(), serializer=ProjectSerializer)

    class Meta:
        model = Announcement
        fields = ("id", "title", "content", "create_time", "update_time", "project")
