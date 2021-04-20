<?php

namespace App\Message;

class RegisterEmail
{
    /* @var int $userId */
    private $userId;

    public function __construct(int $userId)
    {
        $this->userId = $userId;
    }

    public function getUserId(): int
    {
        return $this->userId;
    }
}
