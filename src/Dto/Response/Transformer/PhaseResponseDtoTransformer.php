<?php

declare(strict_types=1);

namespace App\Dto\Response\Transformer;

use App\Dto\Response\PhaseResponseDto;
use App\Entity\Phase;
use App\Service\ImageHelper;

class PhaseResponseDtoTransformer extends AbstractResponseDtoTransformer
{
    /** @var CommentResponseDtoTransformer $commentResponseDtoTransformer */
    private $commentResponseDtoTransformer;

    public function __construct(CommentResponseDtoTransformer $commentResponseDtoTransformer)
    {
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
        $dto->image = $this->transformImages($phase->getImage());
        $dto->comments = $this->commentResponseDtoTransformer->transformFromObjects($phase->getParentComments());

        return $dto;
    }

    private function transformImages(string $image): array
    {
        $types = ['original', 'thumbnail', 'thumbnailRetina'];
        $images = [];

        foreach ($types as $type) {
            $images[$type] = '/uploads' . ImageHelper::PROJECT_IMAGE_PATH . '/' . $type . '/' . $image;
        }

        return $images;
    }
}
