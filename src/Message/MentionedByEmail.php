<?php

namespace App\Message;

class MentionedByEmail
{
    /* @var int $userId */
    private $userId;

    /* @var int $authorId */
    private $authorId;

    /* @var string $referer */
    private $referer;

    public function __construct(int $userId, int $authorId, string $referer)
    {
        $this->userId = $userId;
        $this->authorId = $authorId;
        $this->referer = $referer;
    }

    public function getUserId(): int
    {
        return $this->userId;
    }

    public function getAuthorId(): int
    {
        return $this->authorId;
    }

    public function getReferer(): string
    {
        return $this->referer;
    }
}
