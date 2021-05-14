<?php

declare(strict_types=1);

namespace App\Dto\Response;

use JMS\Serializer\Annotation as Serialization;

class ProjectResponseDto
{
    /**
     * @Serialization\Type("int")
     */
    public int $id;

    /**
     * @Serialization\Type("string")
     */
    public ?string $title;

    /**
     * @Serialization\Type("string")
     */
    public ?string $slug;

    /**
     * @Serialization\Type("string")
     */
    public ?string $description;

    /**
     * @Serialization\Type("array<App\Dto\Response\ProjectImageResponseDto>")
     */
    public array $projectImages;

    /**
     * @Serialization\Type("array<App\Dto\Response\UserResponseDto>")
     */
    public array $users;

    /**
     * @Serialization\Type("string")
     */
    public string $author;
}
