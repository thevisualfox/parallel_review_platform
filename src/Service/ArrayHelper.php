<?php

namespace App\Service;

class ArrayHelper
{
    public function mapToArray(object $object): array {
        $array = [];
        foreach ($object as $item) {
            $array[] = $item->getJsonResponse();
        }

        return $array;
    }
}
