<?php

declare(strict_types=1);

namespace App\Dto\Response;

use JMS\Serializer\Annotation as Serialization;

class PhaseResponseDto
{
    /**
     * @Serialization\Type("int")
     */
    public int $id;

    /**
     * @Serialization\Type("int")
     */
    public int $phase;

    /**
     * @Serialization\Type("string")
     */
    public string $image;
}
