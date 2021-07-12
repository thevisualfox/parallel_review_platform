<?php

declare(strict_types=1);

namespace App\Dto\Response;

use App\Entity\Phase;
use JMS\Serializer\Annotation as Serialization;

class ProjectImageResponseDto
{
    /**
     * @var int $id
     * @Serialization\Type("int")
     */
    public $id;

    /**
     * @var int $parentId
     * @Serialization\Type("int")
     */
    public $parentId;

    /**
     * @var string $title
     * @Serialization\Type("string")
     */
    public $title;

    /**
     * @var string|null $description
     * @Serialization\Type("string")
     */
    public $description;

    /**
     * @var Phase $phase
     * @Serialization\Type("App\Dto\Response\PhaseResponseDto")
     */
    public $phase;

    /**
     * @var string[] $allPhases
     * @Serialization\Type("array<int>")
     */
    public $allPhases;

    /**
     * @var int $prevImage
     * @Serialization\Type("array<int>")
     */
    public $allImages;
}
