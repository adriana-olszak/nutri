#!/bin/bash

git filter-repo --email-callback '
return b"your_new_email@example.com" if email in [b"kasia@openline.ai", b"kasia9090"] else email
' --name-callback '
return b"Your New Name" if name == b"kasia9090" else name
'
