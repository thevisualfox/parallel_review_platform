<?php

namespace App\Message;

class ProjectUserAddEmail
{
    /* @var int $userId */
    private $userId;

    /* @var int $projectId */
    private $projectId;

    /* @var string $referer */
    private $referer;

    public function __construct(int $userId, int $projectId, string $referer)
    {
        $this->userId = $userId;
        $this->projectId = $projectId;
        $this->referer = $referer;
    }

    public function getUserId(): int
    {
        return $this->userId;
    }

    public function getProjectId(): int
    {
        return $this->projectId;
    }

    public function getReferer(): string
    {
        return $this->referer;
    }
}
