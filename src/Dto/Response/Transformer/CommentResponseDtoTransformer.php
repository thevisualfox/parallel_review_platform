<?php

declare(strict_types=1);

namespace App\Dto\Response\Transformer;

use App\Dto\Response\CommentResponseDto;
use App\Entity\Comment;

class CommentResponseDtoTransformer extends AbstractResponseDtoTransformer
{
    /** @var UserResponseDtoTransformer $userResponseDtoTransformer */
    private $userResponseDtoTransformer;

    public function __construct(UserResponseDtoTransformer $userResponseDtoTransformer)
    {
        $this->userResponseDtoTransformer = $userResponseDtoTransformer;
    }

    /**
     * @param Comment $comment
     * @return CommentResponseDto
     */
    public function transformFromObject($comment): CommentResponseDto
    {
        $dto = new CommentResponseDto();
        $dto->id = $comment->getId();
        $dto->comment = $comment->getComment();
        $dto->author = $this->userResponseDtoTransformer->transformFromObject($comment->getAuthor());
        $dto->position = [
            'xPercent' => $comment->getPositionX(),
            'yPercent' => $comment->getPositionY(),
        ];

        return $dto;
    }
}
