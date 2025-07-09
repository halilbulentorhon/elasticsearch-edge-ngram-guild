PUT /wildcard
{
    "settings": {
        "analysis": {
            "char_filter": {
                "turkishCharFilter": {
                    "type": "mapping",
                    "mappings": [ "ı => i", "ü => u", "ö => o", "ş => s", "ç => c", "ğ => g", "& => ", "- => ", "\" => ", "_ => ", "’ => ", "' => ", "` => " ]
                }
            },
            "filter": { "word_delimiter": { "type": "word_delimiter" } },
            "analyzer": {
                "default": {
                    "type": "custom",
                    "tokenizer": "standard",
                    "char_filter": [ "turkishCharFilter" ],
                    "filter": [ "lowercase", "asciifolding", "word_delimiter" ]
                }
            }
        }
    },
    "mappings": { "properties": { "text": { "type": "text" } } }
}
PUT wildcard/_doc/1
{ "text": "KırMIzi!! koton ElBİse" }