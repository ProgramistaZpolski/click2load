<?php

file_put_contents("dist.js", str_replace("\$_PHP{STYLE}", file_get_contents("style.css"), file_get_contents("script.js")));