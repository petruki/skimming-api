@app
skimming-api

@http
get /config
get /skim

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
