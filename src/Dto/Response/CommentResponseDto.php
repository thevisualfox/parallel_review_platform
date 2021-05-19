<?php

declare(strict_types=1);

namespace App\Dto\Response;

use App\Entity\User;
use JMS\Serializer\Annotation as Serialization;

class CommentResponseDto
{
    /**
     * @var int $id
     * @Serialization\Type("int")
     */
    public $id;

    /**
     * @var string $comment
     * @Serialization\Type("string")
     */
    public $comment;

    /**
     * @var User $author
     * @Serialization\Type("App\Dto\Response\UserResponseDto")
     */
    public $author;

    /**
     * @var array $position
     * @Serialization\Type("array")
     */
    public $position;
}
