<?php

declare(strict_types=1);

namespace App\Dto\Response;

use App\Entity\Comment;
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

    /**
     * @var array $created
     * @Serialization\Type("string")
     */
    public $created;

    /**
     * @var array $checked
     * @Serialization\Type("boolean")
     */
    public $checked;

    /**
     * @var Comment[] $comments
     * @Serialization\Type("array<App\Dto\Response\CommentResponseDto>")
     */
    public $comments;
}
