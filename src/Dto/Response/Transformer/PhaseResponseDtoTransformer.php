<?php

declare(strict_types=1);

namespace App\Dto\Response\Transformer;

use App\Dto\Response\PhaseResponseDto;
use App\Entity\Phase;

class PhaseResponseDtoTransformer extends AbstractResponseDtoTransformer
{
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

        return $dto;
    }
}
