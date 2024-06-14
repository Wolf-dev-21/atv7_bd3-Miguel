use('BD3-NoSQL-Produtos');
db['bd3-nosql-atv7'].find({valor:{$gt:700}});

use('BD3-NoSQL-Produtos');
db['bd3-nosql-atv7'].find({valor:{$lt:450}});

use('BD3-NoSQL-Produtos');
db['bd3-nosql-atv7'].find({valor:{$gte:500, $lte:950}}).sort({valor:1});