PUT /builtin
{
  "settings": {
    "analysis": {
      "analyzer": { "pattern_colon_analyzer": { "type": "pattern", "pattern": ":" } }
    }
  },
  "mappings": {
    "properties": {
      "text": {
        "type": "text",
        "fields": {
          "standard": { "type": "text", "analyzer": "standard" },
          "simple": { "type": "text", "analyzer": "simple" },
          "whitespace": { "type": "text", "analyzer": "whitespace" },
          "keyword": { "type": "text", "analyzer": "keyword" },
          "pattern": { "type": "text", "analyzer": "pattern_colon_analyzer" }
        }
      }
    }
  }
}
POST /builtin/_analyze
{
  "field": "text.standard",
  "text": "çikolatalı123 kek!"
}
POST /builtin/_analyze
{
  "field": "text.simple",
  "text": "çikolatalı123 kek!"
}
POST /builtin/_analyze
{
  "field": "text.whitespace",
  "text": "çikolatalı kek,fıstık"
}
POST /builtin/_analyze
{
  "field": "text.keyword",
  "text": "çikolatalı kek fıstıklı"
}
POST /builtin/_analyze
{
  "field": "text.pattern",
  "text": "çikolata! kek:fıstık"
}