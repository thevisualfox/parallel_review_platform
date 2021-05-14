<?php

declare(strict_types=1);

namespace App\Dto\Response;

use JMS\Serializer\Annotation as Serialization;

class PhaseResponseDto
{
    /**
     * @var int $id
     * @Serialization\Type("int")
     */
    public $id;

    /**
     * @var int $phase
     * @Serialization\Type("int")
     */
    public $phase;

    /**
     * @var string $image
     * @Serialization\Type("string")
     */
    public $image;
}
