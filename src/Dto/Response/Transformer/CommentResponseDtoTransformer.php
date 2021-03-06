<?php

declare(strict_types=1);

namespace App\Dto\Response\Transformer;

use App\Dto\Response\CommentResponseDto;
use App\Entity\Comment;
use Jenssegers\Date\Date;

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
        $dto->created = Date::parse($comment->getCreated())->ago();
        $dto->checked = $comment->getChecked();
        $dto->comments = $this->transformFromObjects($comment->getComments());

        return $dto;
    }
}
