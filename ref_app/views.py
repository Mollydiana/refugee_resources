from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from pip._vendor import requests


def index(request):
    return render(request, 'index.html')

# Adding csrf_exempt else Django gives 403 Forbidden and does not hit proxy_to()
# I hope you check this comment in
# def proxy_to(request, path, target_url):
#     url = '%s%s' % (target_url, path)
#     # headers = {
#         # 'Authorization': 'Basic TW9sbHlkaWFuYUBnbWFpbC5jb206MUYxZGRsZXI=',
#         # 'User-Agent': 'Mollydiana@gmail.com',
#         # 'Content-Type': 'application/json'
#     # }
#     if request.method == 'GET':
#         proxied_response = requests.get(url, headers=headers)
#     elif request.method == 'POST':
#         proxied_response = requests.post(url, data=request.body, headers=headers)
#     elif request.method == 'PUT':
#         proxied_response = requests.put(url, data=request.body, headers=headers)
#     elif request.method == 'DELETE':
#         proxied_response = requests.delete(url, data=request.body, headers=headers)
#
#     return HttpResponse(proxied_response)