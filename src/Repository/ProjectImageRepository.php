<?php

namespace App\Repository;

use App\Entity\ProjectImage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ProjectImage|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProjectImage|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProjectImage[]    findAll()
 * @method ProjectImage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProjectImageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProjectImage::class);
    }

    public function prevRecord(int $id)
    {
        return $this->createQueryBuilder('p')
            // Filter users.
            ->andWhere('p.id < :id')
            ->setParameter(':id', $id)
            ->orderBy('p.id', 'DESC')
            ->setFirstResult(0)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function nextRecord(int $id)
    {
        return $this->createQueryBuilder('p')
            // Filter users.
            ->andWhere('p.id > :id')
            ->setParameter(':id', $id)
            ->orderBy('p.id', 'ASC')
            ->setFirstResult(0)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    // /**
    //  * @return ProjectImage[] Returns an array of ProjectImage objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ProjectImage
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
