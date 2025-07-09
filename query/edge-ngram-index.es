PUT /edge-ngram
{
    "settings": {
        "analysis": {
            "char_filter": {
                "turkishCharFilter": {
                    "type": "mapping",
                    "mappings": [ "ı => i", "ü => u", "ö => o", "ş => s", "ç => c", "ğ => g", "& => ", "- => ", "\" => ", "_ => ", "’ => ", "' => ", "` => " ]
                }
            },
            "filter": {
                "edgeNgramFilter": {
                    "type": "edge_ngram",
                    "min_gram": 1,
                    "max_gram": 20
                },
                "wordDelimiterTokenFilter": { "type": "word_delimiter" }
            },
            "analyzer": {
                "suggestionAnalyzer": {
                    "type": "custom",
                    "tokenizer": "standard",
                    "char_filter": [ "turkishCharFilter" ],
                    "filter": [ "lowercase", "asciifolding", "wordDelimiterTokenFilter", "edgeNgramFilter" ]
                },
                "suggestionSearchAnalyzer": {
                    "type": "custom",
                    "tokenizer": "standard",
                    "char_filter": [ "turkishCharFilter" ],
                    "filter": [ "lowercase", "asciifolding", "wordDelimiterTokenFilter" ]
                }
            }
        }
    },
    "mappings": {
        "properties": {
            "text": {
                "type": "text",
                "analyzer": "suggestionAnalyzer",
                "search_analyzer": "suggestionSearchAnalyzer"
            }
        }
    }
}
PUT edge-ngram/_doc/1
{ "text": "KırMIzi!! koton ElBİse" }