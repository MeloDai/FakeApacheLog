from django.contrib import admin
from .models import namepw, filelist

class namepwAdmin(admin.ModelAdmin):
    list_display = ('username', 'pw', 'email',)


class filelistAdmin(admin.ModelAdmin):
    list_display = ('username', 'filename', 'desc','time',)


admin.site.register(namepw, namepwAdmin)
admin.site.register(filelist, filelistAdmin)