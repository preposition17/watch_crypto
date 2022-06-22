from datetime import datetime

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import IsAdminUser
from rest_framework.permissions import AllowAny

from .models import Project
from .serializers import ProjectSerializer

from announcements.models import Announcement
from announcements.serializers import AnnouncementSerializer


class ProjectsViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_permissions(self):
        if self.action in ["create", "update", "partial_update", "destroy"]:
            permission_classes = [IsAdminUser]
        else:
            permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]

    def truncated_announcements(self, pk):
        now_dt = datetime.now()
        first_dt = datetime.date(now_dt.replace(month=now_dt.month - 2))
        second_dt = datetime.date(now_dt.replace(month=now_dt.month - 1))
        queryset = Announcement.objects.filter(project=pk, create_time__range=[first_dt, second_dt])
        serializer = AnnouncementSerializer(queryset, many=True)
        return Response(serializer.data)

    @action(methods=["GET"], detail=True,
            url_path="announcements", url_name="announcements")
    def announcements(self, request, pk):
        if not request.user.is_authenticated:
            return self.truncated_announcements(pk=pk)
        queryset = Announcement.objects.filter(project=pk)
        serializer = AnnouncementSerializer(queryset, many=True)
        return Response(serializer.data)
