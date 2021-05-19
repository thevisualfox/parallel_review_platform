<?php

declare(strict_types=1);

namespace App\Dto\Response\Transformer;

use App\Dto\Response\PhaseResponseDto;
use App\Entity\Phase;

class PhaseResponseDtoTransformer extends AbstractResponseDtoTransformer
{
    /** @var CommentResponseDtoTransformer $commentResponseDtoTransformer */
    private $commentResponseDtoTransformer;

    public function __construct(CommentResponseDtoTransformer $commentResponseDtoTransformer) {
        $this->commentResponseDtoTransformer = $commentResponseDtoTransformer;
    }

    /**
     * @param Phase $phase
     *
     * @return PhaseResponseDto
     */
    public function transformFromObject($phase): PhaseResponseDto
    {
        $dto = new PhaseResponseDto();
        $dto->id = $phase->getId();
        $dto->phase = $phase->getPhase();
        $dto->image = '/'.$phase->getImage();
        $dto->comments = $this->commentResponseDtoTransformer->transformFromObjects($phase->getComments());

        return $dto;
    }
}
