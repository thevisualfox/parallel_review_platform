<?php

namespace App\Service;

use App\Entity\User;
use App\Repository\UserRepository;
use Colors\RandomColor;

class ColorHelper
{
    public function __construct(UserRepository $userRepository)
    {

        $this->userRepository = $userRepository;
        $this->users = $this->userRepository->findAll();

        $this->takenColors = [];
        foreach ($this->users as $user) {
            /** @var User $user */
            $this->takenColors[] = $user->getColor();
        };
    }

    public function generateRandomColor(): string
    {

        $hslString = $this->getColor('');
        if (in_array($hslString, $this->takenColors)) {
            $this->generateRandomColor();
        }

        return $hslString;
    }

    private function getColor(string $hslString): string
    {

        $color = RandomColor::one(array(
            'format' => 'hsl',
            'luminosity' => 'light'
        ));

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
