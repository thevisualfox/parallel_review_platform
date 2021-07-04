<?php

namespace App\Service;

use Colors\RandomColor;

class ColorHelper
{
    public function generateRandomColor(): string
    {
        $color = RandomColor::one(array(
            'format' => 'hsl'
        ));

        $hslString = '';
        foreach ($color as $key => $type) {
            if ($key == 'h') {
                $hslString = $hslString . $type . 'deg, ';
            }

            if ($key == 's') {
                $hslString = $hslString . $type . '%, ';
            }

            if ($key == 'l') {
                $hslString = $hslString . $type . '%';
            }
        };

        return $hslString;
    }
}
