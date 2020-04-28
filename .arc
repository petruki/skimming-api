@app
skimming-api

@static

@http
get /config
get /skim

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
