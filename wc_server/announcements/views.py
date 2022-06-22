from datetime import datetime

from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import IsAdminUser
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .models import Announcement
from .serializers import AnnouncementSerializer


class AnnouncementsViewSet(viewsets.ModelViewSet):
    queryset = Announcement.objects.order_by('-create_time')
    serializer_class = AnnouncementSerializer


    def get_permissions(self):
        if self.action in ["create", "update", "partial_update", "destroy"]:
            permission_classes = [IsAdminUser]
        else:
            permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]

    def truncated_list(self):
        now_dt = datetime.now()
        first_dt = datetime.date(now_dt.replace(month=now_dt.month - 2))
        second_dt = datetime.date(now_dt.replace(month=now_dt.month - 1))
        queryset = self.queryset.filter(create_time__range=[first_dt, second_dt])
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def list(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return self.truncated_list()
        serializer = self.serializer_class(self.queryset, many=True)
        return Response(serializer.data)
