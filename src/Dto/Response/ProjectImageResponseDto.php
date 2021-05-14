<?php

declare(strict_types=1);

namespace App\Dto\Response;

use JMS\Serializer\Annotation as Serialization;

class ProjectImageResponseDto
{
    /**
     * @Serialization\Type("int")
     */
    public int $id;

    /**
     * @Serialization\Type("string")
     */
    public string $title;

    /**
     * @Serialization\Type("string")
     */
    public ?string $description;

    /**
     * @Serialization\Type("array<App\Dto\Response\PhaseResponseDto>")
     */
    public array $phases;
}
