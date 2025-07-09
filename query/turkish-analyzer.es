PUT /turkish
{
  "settings": {
    "analysis": {
      "analyzer": {
        "default": {
          "type": "turkish"
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "text": {
        "type": "text"
      }
    }
  }
}