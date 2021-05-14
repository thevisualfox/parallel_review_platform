<?php

declare(strict_types=1);

namespace App\Dto\Response;

use App\Entity\ProjectImage;
use App\Entity\User;
use JMS\Serializer\Annotation as Serialization;

class ProjectResponseDto
{
    /**
     * @var int $id
     * @Serialization\Type("int")
     */
    public $id;

    /**
     * @var string|null $title
     * @Serialization\Type("string")
     */
    public $title;

    /**
     * @var string|null $slug
     * @Serialization\Type("string")
     */
    public $slug;

    /**
     * @var string|null $description
     * @Serialization\Type("string")
     */
    public $description;

    /**
     * @var ProjectImage[] $projectImages
     * @Serialization\Type("array<App\Dto\Response\ProjectImageResponseDto>")
     */
    public $projectImages;

    /**
     * @var User[] $users
     * @Serialization\Type("array<App\Dto\Response\UserResponseDto>")
     */
    public $users;

    /**
     * @var string|null $author
     * @Serialization\Type("string")
     */
    public $author;
}
