## How to generate JWT token SECRET & PUBLIC_KEY (ES256)

ES256 is a popular algorithm for JWTs, which uses ECDSA (Elliptic Curve Digital Signature Algorithm) with the P-256 curve and SHA-256 hash function. Here's how you can generate an ES256 key pair:

Using OpenSSL:

1. Generate the private key:
```
openssl ecparam -genkey -name prime256v1 -noout -out private.pem
```

2. Extract the public key:
```
openssl ec -in private.pem -pubout -out public.pem
```

This will generate a private key and public key pair suitable for ES256 JWT signing and verification.
