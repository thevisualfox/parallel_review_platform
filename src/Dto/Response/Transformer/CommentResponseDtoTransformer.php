<?php

declare(strict_types=1);

namespace App\Dto\Response\Transformer;

use App\Dto\Response\CommentResponseDto;
use App\Entity\Comment;

class CommentResponseDtoTransformer extends AbstractResponseDtoTransformer
{
    /**
     * @param Comment $comment
     * @return CommentResponseDto
     */
    public function transformFromObject($comment): CommentResponseDto
    {
        $dto = new CommentResponseDto();
        $dto->id = $comment->getId();
        $dto->comment = $comment->getComment();
        $dto->author = $comment->getAuthor();

        return $dto;
    }
}
