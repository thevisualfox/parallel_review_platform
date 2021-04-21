<?php

namespace App\Message;

class ProjectUserAddEmail
{
    /* @var int $userId */
    private $userId;

    /* @var int $projectId */
    private $projectId;

    public function __construct(int $userId, int $projectId)
    {
        $this->userId = $userId;
        $this->projectId = $projectId;
    }

    public function getUserId(): int
    {
        return $this->userId;
    }

    public function getProjectId(): int
    {
        return $this->projectId;
    }
}
